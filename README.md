# JS Frontend Test
* **Title**: *Infinity*
* **Candidate**: Filippo Guida

## a little bit of writing 

* ***What’s your proudest achievement?***
  
  When I was a little boy, my father used to bring me every year to a big Hi-Fi audio and video convention. About 15 years later, I graduated cum laude in CS for Audio and Multimedia Technologies (MA) with a concretation on live coding praxis in music and video shows. I believe my father has something to do with that:

  > <https://github.com/filippoguida/VideoDirt>

  That same work got me into a residency the next year: FARM at Oxford University, where I had the chance to expose my work in front of students and professors. It was quite an honor.

  > <https://www.youtube.com/watch?v=QE-IodiN2-A>
  
</br> 

* ***Tell us about a technical book or article you read recently, why you liked it, and why we should read it as well.***

  Hard to pick one... let's say two:
   
  > *Generative Design: Visualize, Program, and Create with JavaScript in p5.js (Book and Website)* <http://www.generative-gestaltung.de/2/>  
   
   It's a great introduction to generative design techniques using JS libraries. Also great website, with amazing examples and updates.
   I wonder if (and how) the tech industry will financially benefit from of those ideas. It is still an unexpressed potential.
   I'd reccomend it because applies simple solutions you're familiar with to generative solutions easy on the eye.
   Something good to have in the toolbox.

  > *Web Design History Timeline: WD Museum*
   https://www.webdesignmuseum.org/web-design-history

   The link above points to a selected collection from the Web Design Museum, with a list of milestones organized in a timeline. There are some interesting milestones like the first web banner ever made (AT&T - 1994). I think It'll make you smile, especially if you used one of those tools in the past.

   One of my old professors used to say: 
    
    > *better have new ideas for old technologies than new technologies for old ideas'*

   This is why from time to time I look up old HW and SW products. Sometimes fresh ideas come from the past.
   
   
### solution

The provided solution is a single page react app compiled using a toolchain based on webpack and typescript, with some dependencies in JS. CSS styles are precompiled using SASS.

Every universe displays a graphic representation  in background that runs on WebGL. Each individual universe lays in a different renderer, and considering the following structure would be easy to display stars values coming from rest api (for now is just random).

Rest requests have been managed using axios and a chache manager. Tests on rest apis have been developed using Jest. To keep the solution simple to read I haven't used a global state manager, but is something I would eventually add.

Considering the time slot, have decided to mostly focus this solution on the first five tasks, avoiding entierly the six and seven. Even if would be fairly straightforward to  add them, it would take me too long to think anout a thoughful design solution to integrate them well. I'd rather show a complete solution able to easily incorporate pagination and data mutations.

scripts:
yarn start -> serve solution on dev server

yarn build -> create bundle (not compatible with file:// because of react-route-com. old commits are)

yarn test -> calls jest

yarn jsonServer -> runs mock DB