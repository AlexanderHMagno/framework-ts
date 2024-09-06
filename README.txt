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