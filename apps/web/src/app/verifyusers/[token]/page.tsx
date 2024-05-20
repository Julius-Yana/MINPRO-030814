"use client"

import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function Page() {
  const params = useParams()
  const router = useRouter()

  const handleVerify = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}users/verify`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${params.token}`
        }
      })
      if (res.ok) {
        window.alert('Account successfully verified!')
        router.push('/login')
      } else {
        window.alert('Verification failed. Please try again.')
      }
    } catch (err) {
      window.alert('An error occurred. Please try again.')
      console.log(err);
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
