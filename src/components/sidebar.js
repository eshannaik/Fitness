import {Navigation} from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { useHistory, useLocation } from "react-router-dom";

const SideBar = () =>{
    const history = useHistory();
    const location = useLocation();
    return(
        <div>
            <Navigation
                className="border"
                activeItemId={location.pathname}
                onSelect = {({itemId}) => {
                    history.push(itemId)
                }}
                items = {[
                {
                    title: 'Chest',
                    itemId:'/main/chest',
                },
                {
                    title: 'Back',
                    itemId:'/main/back',
                },
                {
                    title: 'Legs',
                    itemId:'/main/legs',
                },
                {
                    title: 'Shoulder',
                    itemId:'/main/shoulder',
                },
                {
                    title: 'Triceps',
                    itemId:'/main/triceps',
                },
                {
                    title: 'Biceps',
                    itemId:'/main/biceps',
                },
                {
                },
                {
                },
                {
                },
                {
                },
                {
                },
                {
                },
                {
                },
                {
                },
            ]}
        />
            <div className="absolute bottom-0 w-full my-8">
                <Navigation
                    activeItemId={location.pathname}
                    items={[
                    {
                        title: "Home",
                        itemId: "/",
                    }
                    ]}
                    onSelect={({ itemId }) => {
                    history.push(itemId);
                    }}
                />
            </div>
        </div>
    )
}

export default SideBar