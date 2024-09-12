1) Create a new project with parcel
2) Create a full class with USER 
3) This class will contain the following ideas
	- data as interfact UserProps
	- get (propName string): string | number
	- set (update UserProps):void
	- on (eventName string, callback: () =>{}
	- trigger (eventName :string) : void
        - fetch() : promise
	- save() : Promise

4) Set up a new Dev server to save and return data JSON-SERVER
5) Create and test with new users
6) After this refactor composition in order to havve a flexible implementation
7) As you can imagine the USER class has too many responsabilities breaking SOLID principle (single responsability)
8) Thus, we should create other class in charge of:
	- Storing data (Attribute.ts) T extends Object
	- Event and logic (Eventing.ts)
	- Persistence of data (Sync.ts) -> fetch and save (include Generics for the data that is expected and response with AxiosPromise<T> type
That way we are gonna use composition to delegate that responsability to other entities
Composition is Delegation
Create get accessor to return the Passthroug Methods
Dont forget to bing the class bind, when is ambiguous you can do this with arroy methods
Now create the coordinations methods in the userClass ( The coordination method will communicate different delegetaion classes in order to obtain the real value)

Pending)

9) Now that we have built a master class (almighty) we should extract the main data and create a general class (super class) that
will allow us to reuse this code, in this case we can approach this with inherintance over composition (still reusing composition in the super class)
10) Create interfaces for every single hardcoded field (Sync, Attributes and Eventing)
11) We are gonna call this class Model<T> and will use generics to allow multiple data to be stored by sync and Attributes (different Entities will have different schemas)
12) Once you have achieve this goal, the idea would be to create a User Collection class to request via API the information of a group of entities (for instance /users)
13) Remember to create this as abstract as possible using Generics, and also inject an Eventing class to trigger changes, and fetch class to get information from the API and set it in an array of entities called Data
14) Add a fetch methods that relies on Axios to call the json-serve and get a full list of users to return as type users
15) Update this class to make it generics
16) Add the Collection class to the User class to return as a static class a list of all users in the application.
17) this method should return type of Collection<User, UserProps>


View)

18) The view will be controlled by 3 classes (the wrapper User Details), (The viewable to display Data), The action area (To update information controlled by a form), That way 
every class would have its own responsability
19) The best way to start this generic class as Form is to attach to a specific example like start building the USERFORM and from there we can transform this in a generic version
20) Adding Model Properties and display in the dom
21) Biding events on classNames rather on the selector type
22) If a method affects directly a Class is better to have that method in that class and thru delegation we modified that class,
rather than modifying this externaly
22 a) create a button with a random age setter
23) On change update or rerender the  HTML (using the eventing system)
24)Read the input value and update the name of the user
25) Check if the ts -init has been created an enacted the Strict Null Check system 
26) Add a save button an store the Model 
27) Reusable View Logic (The first part is to create an specific view that works) now abstract the methods of this class (using composition or inheritance create a View class abstract because we do
no need to instantiate this )
28) Remember to extract everything to the View Abstract class and from there extends to the specific model
29) The view model should have a Generic that points to the class type and the expected Properties

Pending Task

30) Now remember that one of the SOLID principles is to create classes with single responsabilities and we can create multiple classNames
to accomplish this, so with the help of the Generic View class, create 3 new classes that extends VIEW UserEdit, UserShow and USERFORM
	- UserEdit will be the wrapper
	- UserShow responsability is to show the content and render 
	- UserForm will be responsable of managing actions on the data. 
	
