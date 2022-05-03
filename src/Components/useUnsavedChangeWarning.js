import React, { useEffect, useState } from "react";
import { Prompt} from 'react-router-dom';

// const useUnsavedChangesWarning = (message = "Are you sure you want to discard the changes ? ") => {
//         const [isDirty, setDirty] = useState(false);

//         useEffect(() => {

//                 window.onbeforeunload = isDirty && (() => message);
//                 return  () => {
//                     window.onbeforeunload = null;
//                 }

//         },[isDirty])

//         const  routerPrompt = <Prompt  when={isDirty} message = {message}/>

//     return [routerPrompt, () => setDirty(true), () => setDirty(false)];

// }

class useUnsavedChangesWarning extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            isDirty:false,
            message:"Are you sure you want to discard the changes ? "
        }

        const  routerPrompt = <Prompt  when={this.state.isDirty} message = {this.state.message}/>  
    
    }
    
   setDirty =() => {
     this.setState({
        isDirty:true
     })
   }

   componentDidMount() {
    window.onbeforeunload = this.state.isDirty && (() => this.state.message);
                    return  () => {
                        window.onbeforeunload = null;
                    }
   }

    render(){

        return [this.routerPrompt];

    }

}


export default useUnsavedChangesWarning;