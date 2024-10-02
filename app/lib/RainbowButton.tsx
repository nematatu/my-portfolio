import { RainbowButton } from "@/components/ui/rainbow-button"

export default function RainbowButtonDemo(){
    return(
     <RainbowButton onClick={()=>{console.log("hello")}}>CLI MODE</RainbowButton>
    )
}