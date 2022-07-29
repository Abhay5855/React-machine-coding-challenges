

import {connect} from "react-redux"
import MenuItems from "../MenuItems"


const mapStateToProps = (state) => {

     return {

           items : state.TodoReducers,
     }

}



export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);


