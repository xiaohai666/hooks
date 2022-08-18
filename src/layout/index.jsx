import Menu from "./Menu";
import { Outlet } from "react-router-dom";

function LayoutIndex() {
    return <div style={{display:'flex'}}>
        <Menu></Menu>
        <div style={{flex:'1',height:'100vh'}}>
            <Outlet />
        </div>
        
    </div>
}

function LayoutFull() {
    return <div style={{display:'flex'}}>
        <div style={{flex:'1',height:'100vh'}}>
            <Outlet />
        </div>
        
    </div>
}

export {
    LayoutFull,
    LayoutIndex
} 