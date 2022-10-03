# IZ Social Media App Frontend using React

- We have created the backend apis using the node, here we will be creating the frontend and integrating the apis using redux state management.

- Creating structure for the application all the folders, that will be common like layout,auth and etc.

## Installing Dependencies

- npm i --save react-router-dom -- for routing within the application

## Redux setup

- Redux is used to manage states in the large applications.

- npm install --save redux -- functions provide krta hai yh jsse environment set krte hn redux ka!
- npm install --save @redux-devtools/extension -- integrate with the extention in the chrome with us
- npm install --save redux-thunk -- thunk helps asynchronous request as we will be calling data so thunk will help us as middleware.
- npm install --save react-redux -- to integrate react application with the redux

- Redux extention in chrome as well -- to help managing state using redux.

- reducer folder in src -- menuDataReducer/userReducer/index.js --jnki states mange krni hain yh wo files bna rhe hain hm
- creating combineReducer !!! to combine all the reducer files jnki hmne state manage krni hain.

- Within application mein jb state change krni hogi hmein to use hm kaheinge menuDataReducer, jo state change krega hmare pass.
- dosri hogi userDataReducer jo ke user ka data leke aega hmare pass.
- index.js mein jo hmne do reducer bnae hain uper menuDataReducer aur userDataReducer inko combine kreinge, aur export kreinge.
- import {combineReducers} from 'redux';

- Reducer bnarhe hain hm alag alag userDataReducer aur menuDataReducer aur hm state change krrhe hnge inke andar, aur wahan par hmare pass initial states hngi.

- Naam bhi deskte hain hm jb reducers ko combine krrhe hnge hm to wo naam show krega devtools mein pora nhi dega jese neche 'user' btaega hmein.

- export default combineReducers({
  user: userDataReducer,
  menu: menuDataReducer,
  });

- Actions folder in src folder bnarhe hain reducer folder alg tha usmein hmare pass jo jo states change krni hain wo sb aeingi.
- Actions folders mein - menuDataAction.js / userDataAction.js / types.js - ki files hngi aur inpe hm actions perform kreinge.

- types jo bnaounga mein wohi mein dispatch mein bhi use krrha hnga auke ilawa wohi mein reducer mein bi use krrha hnga apne pass.

- update krne ke liye data ko current ki aik state bnegi hamre pass.
- types.js mein hmne sari types btadein hain jo jo hm use krrhe hain apne pass chahe wo user ki hn ya menutab ki ke knsa tab selected hai uski ,
  usse hoga yh ke hmare pass wo chezein yh leke ajaega aur phr hm usse update krdeinge.

- Phle hmne reducer ka folder bnaya hai aur us mein reducer btadie hain sare aur combine reducer bhi bnadia hai hmne udhr.
- Phr hmne action ka folder bnaya hai aur usmein hmne types define kri hain aur jo reducers bnae hain hmne uske actions define krdie hain hmne.
- Ab hmne src folder mein store.js ki file create kri hai aur uske andar hm store bnaeinge.

- store ki file mein middleware bhi baneinge hm aur middlewear ke torpe hmare pass thunk hai jsko use krte we hm async programmng kreinge.

- store.js mein yh sb kaam kreinge hm.

- import {createStore,applyMiddleware} from 'redux';
- import thunk from 'redux-thunk';
- import rootReducer from './reducer' -- yh wo combine reducers arhe hain hmare pass jo hmne export kre hain.
- import {composeWithDevTools} from '@redux-devtools/extention' -- Isse hm devtools ke sth integrate kreinge.

- Store ki file mein hm createStore krdeinge aur export krdeinge usko phr hm apni app ke sath usko integrate kreinge apni application ke andar.
- Aur wo hm kreinge react-redux ke through.
- Baki abhi tak jo hmne sare ke sare redux ke packages install kre the wo use krlie hain hmne yhn pe apne pass.

- App.js ki file mein provider import kreinge hm aur wrap krdeinge pori application ko hm aur props mein pass krdeinge hm apne pass store.
- import {provider} from 'react-redux';

- pori app.js mein hmne wrap krdia hai provider se to ab hoga yh ke pori application ki states hm manage krskte hn redux ke through.

- Js component mein bhi hm redux use krna chahte hn us mein bhi hm use kreinge redux connect se.
- import {connect} from 'react-redux';

- const mapStateToProps = state =>({
  selected: state.menu.selected // ismein value aegi hmare pass menu ke reducer mein se state ki jo bhi hogi.
  })

- export default connect(mapStateToProps,null)(MenuTab); //hmein connect ke through export krna zrori hai.

- Aur devtools mein bhi hm dekh skte hain isko ke kia chalrha hai hmare pass.

- Action function kia krega bs dispatch ko return krega yh hmare pass.

- Action ka function bhi hm import kreinge ks component mein use krna hai hmne yh.

- Home component ki state bhi change horhi hai redux se hmare pass yhn pe aur hmare pass uske ilawa component bhi wohi render horha hai yh logic lgai hai hmne.

- component mein redux ko hm use krrhe hn apne pass connect se.
- Baki hmne redux ke actions, reducers bnadie hain apne hi pass jhn se state change horhi hogi, bs hm component mein call kra rhe hnge usko.

- Ab hm sare actions likhrhe hn user ke jo apis se chaleinge hmare pass.

- npm i --save axios;
- uske ilawa actions mein hmare pass async function run kreinge user ke actions mein.

### User Actions

- Component -> Action -> Reducer -> State will be Changed -- this is the flow!

- **signUp:** signup ki api post request hai aur return hmein kregi yh jwt token, jsko hm save krleinge apne pass localStorage mein, yh kaam hm actions mein kreinge signup ke jb hmare pass signup call hoga.

  - Save krrhe hn token ko hm localStorage mein apne ps.
    localStorage.setItem('iz-auth-token',token);

- **logIn:** login mein bhi hm post request krrhe hain aur token jo arha hai usko hm apne pass local storage mein save krarhe hain apne pass.

- **getUser:** axios ki get request krrhe hain hm yhn pe aur hm headers mein pass kreinge,
  Content-Type:application/json ,
  "iz-auth-token": localStorage.getItem("iz-auth-token")  
  kionke yh data zrori chahiye hai hmein get request krte we isi trhn hmne apis test kri hain apni rapid-api pe.

  - phr hm dispatch call krleinge yahin actions mein apne ps, isse hoga yh ke jo chezein hm bjna chaheinge payload pe wo chali jaeingi hmare ps se.
  - phr jb dispatch hit hoga to reducer mein switch case hoga usi naam se jspe dispatch hit hoa hai, wahan pe phr hmare pass state update hojaegi.

  - dispatch response ko kreinge jo api se aega take usse hm apni state ko update krein.

## Public && Private Routing within the Application:

- SignUp aur SignIn ka jo route hai use hmne public krna hai aur Home ka jo route hai use hmne private krna hai yhn pe!

- Inspect Element mein Application mein hmare pass hai localStorage jo hm use kreinge save krne ke liye token ko!

## Extra Information

- padding : 10px(top/down) 30px(left/right)
- .form-controls input:focus{
  outline: 0;
  } -- creating the outline 0

- Routing apply krrhe hain hm application mein aur layout component as a parent rakh rhe hain hm route component ke liye take navbar na hate!
- import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

- Importing navlink to route at a differnt route!

- name se mtlb hai jb bhi name change ho hmare pass yh update krde object ki value ko
- const onChange = e => setUser({...user, [e.target.name] : e.target.value}); -- onChange of the input fields this function will be called

- Created home component as well wit menuTab over here!

- flex:1; --- isse sbko same space distribute krdega total width ki.

- We must define all the initialStates in the user initial state. Will be updating and manipulating the states using the action.type and updating the logic for the state.

- Applied the redux on the menuTab and it is working fine with actions and state.
- Created the pages here for the menuTab that what ever is selected on the menuTab render that particular page on the screen.

- post request mein dispatch ka kia kaam, dispatch ka kaam aega get request se jsse hm state change krdeinge apne pass.

- dispatch mein type aur payload ata hai jsse state change hoti hai hmare pass.
  dispatch(
  {
  type: "name",  
   paylaod: data
  }
  )

- jo bhi apis hm fetch kreinge uski types create krrhe hain take dispatch aur action mein same use krein.
- trim() - method removes whitespaces from the string.

- Signup && login all input field are handled using states and validations are applied all the way!

- li>span\*2 -- Isse listitem ke andar 2 span elements kholdega shortcut hai yh.

- margin: 0 auto; -- top/down - 0 , left/right - auto -- it means that the margin from the left is auto and from the right is auto as well therefore things will end up in the center as left is auto and right is auto as well!

- .profile ul li:nth-child(even/odd){ -- nth child means the child on the even index will become red.
  background-color: red;
  }

- current post ke liye hai ke kisi post ko update krna chhate hain hm to usko hm current mein add krdeinge aur phr usko update krdeinge hm.

- const res = await axios({
  method: "POST",
  url: `${BACKEND_URL}/api/users`,
  headers: {
  "Content-Type": "application/json",
  },
  data: userData,
  }); -- to create a post request using axios

- Js action mein hm dispatch use kreinge wo function alag baneinge
  const dataExample = (userId) =>async (dispatch) =>{}

- When we will update the post, we will going to give the data inside the postbody.

- We will going to use set Current post to be updated so we create a action to makesure and to figure out the post.

- dispatch keyword is not necessary to call the reducer, if there is no data in the function so it is not needed all the way there.

- Update logic to update the reducer state(userPosts) -- userPosts: state.filter((post) =>
  post.\_id === action.payload.id ? action.payload : post
  ),

- Delete logic to update the reducer state(userPosts) without that particular posts that was deleted -- state.filter((post)=> post.\_id !== action.payload.\_id)

- .btn:active{
  transform: scale(0.95)
}         --- active means jb click kreinge hm 

- !important se styling lazmi apply hogi jahan pe bhi hm krna chaheinge lazmi apply ho hmari styling wahan pe !important ka tag lgadeinge.

- In other words, if you need side effects (requests to API, etc.) or you want to call two or more actions then we will call dispatch in the actions else it is not required as by default it returns synchronous data.

-   grid-gap: 10px;   --  To give spaces within the grid

- Current state ko bnane ka maksad hi yhi hai hmara ke select knsa kra wa hai hmne post update ke liye ya add ke liye kionke agr update ke liye kreinge koi post select to hmare pass current state mein aega wo null nhi hogi state hmare pass.

- CORS -- cross origin resource sharing        

- Js mein dispatch use hoga wo hoga action hmare pass, else wo aik normal function hoga hmare pass.

- useNavigate hook use kreinge hm application mein route pe jane ke liye!

- login krle user hmara to hm getUser ki api call krlein take uska data show krana hoga hmein screen pe.
- Apis call krke hm user ko show kra rhe hain yhn pe!
- uske bd posts aur allposts bhi hm fetch kreinge take unko bhi hm fetch krlein yhn pe!

- posts be timeline pe CRUD chaleinge hm userposts pe idhr hi hm.

- agr state null hai to empty array zror return krega yh .

- post hain bhi ya nhi wo hm check krleinge ampersant operator se : 
    userPosts && ----- proceed krega yh ceck krega hai ya nhi.

- localStorage.removeItem("iz-auth-token");   --  se local storage mein remove krdeta hai token ko!

- err?.response?.data        --  isse error jo api se arha hoga wo dekhadega hmein, catch mein yh!

- filter ki jaga map lgaeinge hm apne pass.

- logout -- hm remove krdeinge token ko localStorage se take login ke credentials delete hojaein hmare pass, uske ilawa states ko hm apni delete krdeinge sari mtlb null krdeinge take reset hojaein!

- Home component will not go directly to the pages profile , as we are fetching the data api so it must be a async request therefore here we will be needing the loading and there we are showing the Spinner component here. 

- bug tha getuser call horha tha aur error arha tha hamre pass.

- Error aega agr to hm wo bhi krskte hain 
  1- state bnegi aik error ki
  2- dispatch call hoga aur update kreinge state ko
  3- jhn jhn use krni hogi error pages mein whn state call krleinge aur alert call kradeinge!

- 1- getUser in profile page.
- 2- getUserPosts in timeline and apply CRUD.
- 3- getAllPosts in newsfeed.
- 4- loadings add kreinge hm userDataLoadings / allPostsLoadings / userLoadings
- 5- CRUD functionality -->> timeline 
- 6- Logout button functionality.


## Deployment on Heroku

- 1-connect github
- 2-auto deploy enabling
- 3-buildpack url for craete-react-app  :  https://github.com/mars/create-react-app-buildpack
- 4-deploy