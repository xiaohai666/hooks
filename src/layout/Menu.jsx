import menus from "../common/menus";

function Menu(params) {
    function getMenus(item) {
        if (item.children) {
            return (
                <div key={item.title}>
                    {menuItem(item)}
                    <div style={{ paddingLeft: '20px' }}>
                        {
                            item.children.map(a => {
                                if (a.children) {
                                    return getMenus(a.children)
                                }
                                return menuItem(a)
                            })
                        }
                    </div>
                </div>
            )
        }
        return menuItem(item)
    }

    function menuItem(item) {
        return <div key={item.title}><a href={item.path}>{item.title}</a></div>
    }
    return <div style={{ padding: '10px 30px', textAlign: 'left' ,borderRight:'1px solid'}}>
        {menus.map(a => { return getMenus(a) })}
    </div>
}
export default Menu;