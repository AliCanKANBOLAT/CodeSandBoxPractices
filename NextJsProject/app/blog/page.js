import Link from "next/link"

export default function Blog () {
  return(
    <>
    <p> <Link href="/blog/post1">Go to Post 1 </Link> </p>
    <p> <Link href="/blog/post2">Go to Post 1 </Link> </p>
    </>
  )
}