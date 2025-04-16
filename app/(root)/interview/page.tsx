import { Agents } from '@/components/ui/Agents'
import React from 'react'

const Page = () => {
  return (
    <>
        <h3>Interview Generation</h3>

        <Agents userName="You" userID="user 1" type="generate" />
    </>
  )
}

export default Page