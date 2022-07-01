import { getTopMenu } from "./menus/topMenu";
import getProjectsMenu from "./menus/projectsMenu";

export default function getSideBar(){
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');

    sideBar.appendChild(getTopMenu());
    // sideBar.appendChild(getProjectsMenu());
    sideBar.classList.add('active');
    
    return sideBar;
}