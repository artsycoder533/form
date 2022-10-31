import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import Link from "next/link";
import Confetti from "react-confetti"

export default function Success() {
  const [pieces, setPieces] = useState(200);

  //the package has no way to stop the confetti so we have to programmatically do it
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0)
    }, 3000)
  }

  useEffect(() => {
    stopConfetti();
  }, [])

  const router = useRouter();

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg w-1/2 text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-medium">
          Thanks for the email, {router.query.name}!
        </h1>
        <p className="text-lg">
          We have sent you an email to {router.query.email}. We will get back to
          you as soon as we can!
        </p>
        <Link href="/" className="mt-4 block text-blue-700 font-medium">&larr; Back to Home</Link>
        <Confetti gravity={0.2} numberOfPieces={pieces} />
      </div>
    </m.main>
  );
}
