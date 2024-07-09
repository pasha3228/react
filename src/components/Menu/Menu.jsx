
const Menu = ({menu}) => (
  <div>
     
    <div>
      {menu.map((item) => {
        console.log(item, "menu item")
        
        return (
        <div key={item.id}>
          <div>{item.name}</div>
          
        </div>
      )})}
    </div>
  </div>
)
export default Menu

