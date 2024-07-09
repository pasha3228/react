const Reviews=({reviews})=>( 
    <div>
{reviews.map((item)=>{
    console.log(item, "review item")

    return(
        <div  key={item.id}>
            <div>{item.user}</div>
            <div>{item.text}</div>
        </div>
    )
})}

    </div>
)

export {Reviews}