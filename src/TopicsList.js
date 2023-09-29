import React from 'react'
import Topic from './Topic'

export default function TopicsList({ topics }) {
  return (
    topics.map(topic => {
      return <Topic key={topic.id} topic ={ topic }/>
    })
  )
}
