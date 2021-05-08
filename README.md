# JS Frontend Test
* **Title**: *Infinity*
* **Candidate**: Filippo Guida

## a little bit of writing 

* ***What’s your proudest achievement?***
  
  When I was a little boy, my father use to bring me every year to a big Hi-Fi audio and video convention. About 15 years later, I graduate cum laude in CS for Audio and Multimedia Technologies (MA) with a concretation on live coding praxis in music and video shows. I believe my father has something to do with that:

  > <https://github.com/filippoguida/VideoDirt>

  That same concretation got me into a residency the next year: FARM at Oxford University, where I had chance to expose my work in front of students and professors. It was quite an honor.

  > <https://www.youtube.com/watch?v=QE-IodiN2-A>
  
</br> 

* ***Tell us about a technical book or article you read recently, why you liked it, and why we should read it as well.***

  Hard to pick one... let's say two:
   
  > *Generative Design: Visualize, Program, and Create with JavaScript in p5.js (Book and Website)* <http://www.generative-gestaltung.de/2/>  
   
   It's a great introduction on generative design techniques using JS libraries. Also great website, with amazing example and updates.
   I wonder if (and how) the tech industry will financially benefits from of those ideas. It is still an unexpressed potential.
   I'd suggest you to read it because applies simple solutions you're familiar with to generative solutions easy on the eye.
   Something good to have in the toolbox.

  > *Web Design History Timeline: WD Museum*
   https://www.webdesignmuseum.org/web-design-history

   The link above points to selected collection of Web Design Museum, with a list of milestones organized in a timeline. There are some interesting milestones like the first web banner ever made (AT&T - 1994). I think It'll make you smile, especially if you used one of those tools in the past.

   One of my old professor used to say: 
    
    > *better have new ideas for old technologies, than new technologies for old ideas'*

   This is why from time to time I look up old HW and SW products. Sometimes fresh prospectives come from the past.
   
   
### solution

Ths provided solution is a single page react app compiled using a toolchain  based on webpack and typescript. CSS styles are precompiled usindg SASS.

Every universe displays a graphic rapresenation in backgrund that runs on WebGL. Each individual universe lays in a different renderer, and considering teh following structur could be potentially be adapted to display stars values coming from rest api (for now is just random).

- note: this exact 3D script is a project I came across long ago and refactored for personal porpuses. So I kept it in JS without porting it.

rest requests have been managed using axios and a chache manager. Tests on rest apis have been developed using Jest.

scripts:
yarn start -> serve solution on dev server

yarn build -> create bundle (not compatible with file:// because of react-route-com. old commits are)

yarn test -> calls jest

yarn jsonServer -> runs mock DB