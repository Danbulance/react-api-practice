import { useState, useEffect } from 'react'
 
export default function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <div class="flex flex-wrap">
      {data.map((item, index) => {
        return (
          <div key={index} id={index} class="w-1/3 px-2">
           <img src={item.url} />
           <p class="text-[20px] text-center mb-5 font-semibold">{item.title}</p>
          </div>
        ) 
      })}
    </div>
  )
}





// return (
//   <div class="flex flex-wrap">
//     {data.map((item, index) => {
//       return (
//         <div key={index} id={index} class="w-1/3 px-2">
//          <img src={item.url} />
//          <p class="text-[20px] text-center mb-5 font-semibold">{item.title}</p>

//          <div class="hidden">
//            <img src={item.url} />
//            </div>
//         </div>
//       ) 
//     })}
//   </div>
// )
// }



// const imgModal = document.querySelector("img");

// function imgClick () {
//   imgModal.addEventListener("click", );
//   <div class="hidden">
//            <img src={item.url} />
//            </div>
//         </div>
// }