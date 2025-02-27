'use client'
import React from 'react'
import { useState } from 'react'
import db from '../../utils/firestore'
import {
  collection,
  addDoc,
  query,
  where,
  getCountFromServer
} from 'firebase/firestore'
import useAuth from '../../hooks/useAuth'
import CatComponent from './cat-component'
import CatStats from './cat-stats'

const CatContainer = () => {
  const user = useAuth()
  const [imageName, setImageName] = useState('./cat-still.gif')
  const [localCount, setLocalCount] = useState(0)
  async function getStats() {
    const qoo = query(collection(db, 'clicks'), where('sound', '==', 'oo'))
    const qee = query(collection(db, 'clicks'), where('sound', '==', 'ee'))
    const qaa = query(collection(db, 'clicks'), where('sound', '==', 'aa'))
    // Run all queries in parallel
    const [count1, count2, count3] = await Promise.all([
      getCountFromServer(qoo),
      getCountFromServer(qee),
      getCountFromServer(qaa)
    ])
    let counts = [count1.data().count, count2.data().count, count3.data().count]
    console.log(counts)
    const sum = counts.reduce((partialSum, a) => partialSum + a, 0)
    counts = counts.map((count) => Math.floor((count / sum) * 100))
    return counts
}

  const spin = async (sound) => {
    const audio = new Audio(`./${sound}1.m4a`)
    audio.play()
    setImageName('./cat-moving.gif')
    setTimeout(() => setImageName('./cat-still.gif'), 500)
    try {
      const docRef = await addDoc(collection(db, 'clicks'), {
        sound: sound,
        date: new Date(),
        uid: user.uid
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setLocalCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <CatComponent imageName={imageName} spin={spin} />
      <CatStats getStats={getStats} localCount={localCount} />
    </>
  )
}

export default CatContainer
