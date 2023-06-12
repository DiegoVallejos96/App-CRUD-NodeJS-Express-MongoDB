import Task from '../models/Task'

export const renderTasks = async (req, res) => {

    //res.render("index");//asi nomas, ya esta configurada la ruta a index.hbs desde el app.js
    const tasks = await Task.find().lean()//con lean devuelve objetos de js no de mongodb

    res.render('index', { tasks: tasks });
  }


export const createTasks =  async (req, res) => {
    try {    
      const task = Task(req.body)
      await task.save()

      res.redirect("/");
    }catch (error){
      console.log(error)

    }
  }

 export const renderTaskEdit = async (req, res) => {
    const task = await Task.findById(req.params.id).lean()

    res.render("edit", { task });
  }

 export const editTask = async(req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/");
  }

export const deleteTask = async(req, res) => {
  const {id} = req.params;
  await Task.findByIdAndDelete(id)
  res.redirect("/");
}

export const toggleDone = async(req, res) => {
  const {id} = req.params;
  const task = await Task.findById(id)
  task.done = !task.done;
  await task.save()
  res.redirect("/");
}