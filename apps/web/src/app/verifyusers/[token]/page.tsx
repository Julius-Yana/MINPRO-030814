"use client"

import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Page() {
  const params = useParams()
  const router = useRouter()

  const handleVerify = async () => {
    console.log('Starting verification process')
    try {
      console.log('Fetching API:', `${process.env.NEXT_PUBLIC_BASE_API_URL}users/verify`)
      console.log('Token:', params.token)
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}users/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${params.token}`
        }
      })

      console.log('API response status:', res.status)
      console.log('API response:', res)

      if (res.ok) {
        window.alert('Account successfully verified!')
        console.log('Verification successful, redirecting to login...')
        router.push('/login')
      } else {
        const errorData = await res.json();
        console.error('Verification failed:', errorData)
        window.alert('Verification failed. Please try again.')
      }
    } catch (err) {
      console.error('An error occurred during verification:', err)
      window.alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="flex min-h-[60vh] flex-col w-[480px] items-center mx-auto justify-center gap-8">
      <h1>Click this Button to activate your account</h1>
      <button 
        onClick={handleVerify} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Verify Account
      </button>
    </div>
  )
}
