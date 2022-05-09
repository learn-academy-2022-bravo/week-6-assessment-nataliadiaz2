# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To fix this mistake, on the Cohort model in Active Records the has-many will be added including at the end the name of the model to be connected. Then you will need to go to the child model, add under the Active Record belongs_to including the parent model at the end. This is going to link the models. 

  Researched answer: The foreign key to link two models together resides on the child model side. However, both models will need assignment to link to. The parent model in the example is Cohort and it has the correct connection, the has_many students. Now in the Student model we has the foreign key belongs_to Cohort. In the terminal when creating the new child model, there also has to include an anchor in a sense to link the models that way. In the new model's database you have to include the parent model's id, modelname_id followed by the datatype integer. These two actions will link the models. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that need params are create and edit. Those two RESTful routes are creating new information that will be inputted in the database. They need params to relay that new information. 

  Researched answer: 



3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands are: $ rails g model ModeName, $ rails g controller ModeName, and another one. 

  Researched answer: Rails generator commands are a terminal command tool in Ruby on Rails to streamline the workflow. The commands aid in creating aspects of the database in Rails. Three rails generator commands that I have used so far are: $ rails generate model ModelName, $ rails generate migration action_here, $ rails generate rspec:install. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

Controller Action: Index, this action shows all information from the related model.
action: "GET"    location: /students          

Controller Action: Create, this action is creating new data/information. It is adding information to the model's database.
action: "POST"   location: /students       

Controller Action: New, this action is creating a path to the new information from the database that was created. 
action: "GET"    location: /students/new

Controller Action: Show, this action shows a specific piece of data/information from the model's database. It is a fraction of the database. 
action: "GET"    location: /students/2  

Controller Action: Edit, this action edits a specific piece of data/information from the database. 
action: "GET"    location: /students/2/edit    

Controller Action: Update, this action updates the selected data/information. The data is modified in some way in the database and will be reflected on the site.  
action: "PATCH"  location: /students/2      

Controller Action: Destroy, this action removes all or some of the existing data related to the model's database. In this case it would remove one fraction of the model. 
action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Stories: 

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

10. 
