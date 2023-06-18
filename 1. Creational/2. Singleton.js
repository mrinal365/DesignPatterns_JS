// Creational pattern which limits the number of instances of an object to  atmost 1 

// Situation

// Here we are writing a program that manages processes 
// Components of this program :  1. Process 2. Process Manager
// Can have 1 or more processes, but only 1 process manager
// Wite a program to limit the number of process manager instances to atmost 1

function Process(state){
    this.state=state;
}
const Singleton = (function(){
    function ProcessManager(){
        this.numProcess = 0;
    }
    let pManager;

    function createProcessManager(){
        pManager = new ProcessManager()
        return pManager;
    }

    return {
        getProcessManager:()=>{
            if(!pManager){
                pManager = createProcessManager()
            }
            return pManager
        }
    }
})

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager)