import Link from"next/link"
import Image from "next/image"

const Logo = () => {
  return (
   <Link href={"/"}>
     <div className="flex items-center gap-1">
       <Image src={'./logo.svg'} alt='logo' width={100} height={50}/>
    </div>
   </Link>
  )
}

export default Logo