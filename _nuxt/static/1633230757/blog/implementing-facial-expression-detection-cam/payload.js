__NUXT_JSONP__("/blog/implementing-facial-expression-detection-cam", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be){return {data:[{blog:{slug:"implementing-facial-expression-detection-cam",description:ay,title:"Implementing Live Facial Expression Detection on Web Browser using open-source Face-Api",subtitle:ay,lead:"The open-source Face-api javascript module provides a real-time facial detection functions that can be used for live facial detection on web",createdAt:"2021-03-15T08:30:27.601Z",updatedAt:"2021-03-15T09:52:47.539Z",cover:{image:az,alt:"Optimizing and Resizing Images Using Canvas API cover image",caption:"Face Detection Photo",thumb:az},tags:["Nuxt","Canvas API","Firebase","Cloud Storage"],toc:[{id:aA,depth:R,text:aB},{id:aC,depth:R,text:aD},{id:aE,depth:R,text:aF},{id:aG,depth:R,text:aH}],body:{type:"root",children:[{type:b,tag:S,props:{id:aA},children:[{type:b,tag:I,props:{href:"#face-api",ariaHidden:T,tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:aB}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"Face-api.js is a JavaScript module, built on top of tensorflow.js core. It implements several\nConvolutional Neural Networks (CNNs) to perform face detections and face recognition. It has been\noptimized to work on web and mobile devices."}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"More examples and full API documentation can be found at\n"},{type:b,tag:I,props:{href:aI,rel:[ac,ad,ae],target:af},children:[{type:a,value:aI}]}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"This api provies various global neural network instances.\nHowever, in this application, we shall use only three of them."}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:b,tag:ag,props:{},children:[{type:a,value:"1. Tiny Face Detector"}]},{type:a,value:"\nTiny Face Detector is an optimized face detector model implemented by face recognition api. The detector computes the locations of each face in an image and will return the bounding boxes together with it's probability for each face. This detector uses depthwise separable convolutions instead of regular convolutions, which makes it\nmuch faster than the other detectors in the api like SSD MobileNet V1. However, it is slightly less accurate."}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"The Tiny Face Detector has a really good performance of detection, making it much faster,\nsmaller and less resource consuming. This model is highly optimized for mobile and web interfaces.\nThe model is trained on a customized dataset of ~14K labeled using bounding boxes. Moreover,\nthe face model has been trained to predict bounding boxes with complete cover facial feature\npoints, therefore it produces better results on face landmark detections than other models."}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:b,tag:ag,props:{},children:[{type:a,value:"2. Face Landmark 68 Net"}]},{type:a,value:"\nThis model is used after the tiny face detector model. It predicts the facial landmarks for each detected face.\nIt employs the ideas of depthwise separable convolutions as well as densely connected blocks. The models have been trained on a dataset of ~35k face images labeled with 68 face landmark points.\nYou can learn more about 68 facial landmarks from this paper.\n"},{type:b,tag:I,props:{href:aJ,rel:[ac,ad,ae],target:af},children:[{type:a,value:aJ}]},{type:a,value:"\n68 facial landmarks are basically the 68 points on a human face whose relative position can help determine if two faces belong to the same person or not."}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:b,tag:ag,props:{},children:[{type:a,value:"3. Face Expression Net"}]},{type:a,value:"\nAs the name suggests, this model is used to categorize the expression of the person's face in one of the seven expressions viz. neutral, happy, sad, angry, fearful, disgusted, surprised. It is lightweight, fast and provides reasonable accuracy. It employs depthwise separable convolutions and densely connected blocks."}]},{type:a,value:j},{type:b,tag:S,props:{id:aC},children:[{type:b,tag:I,props:{href:"#frontend-view---file-element",ariaHidden:T,tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:aD}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"Here, we basically build a video frame 720x560 on the center of the screen which will project the camera video output and perform facial recognition on it. The snippet below builds the html page for it."}]},{type:a,value:j},{type:b,tag:aK,props:{className:[aL]},children:[{type:b,tag:aM,props:{className:[aN,"language-html"]},children:[{type:b,tag:aO,props:{},children:[{type:b,tag:c,props:{className:[d,"doctype"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C!"}]},{type:b,tag:c,props:{className:[d,"doctype-tag"]},children:[{type:a,value:"DOCTYPE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aP]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"lang"}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"en"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"charset"}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"UTF-8"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"viewport"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"width=device-width, initial-scale=1.0"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"http-equiv"}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"X-UA-Compatible"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"ie=edge"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:"Document"},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u003C!-- getting the open source and the local script module which we will build later --\u003E"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aT}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"face-api.min.js"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,L]},children:[]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:L}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aT}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aU}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"script.js"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,L]},children:[]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u003C!-- styling to make the video frame center and limit it's size --\u003E"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,ak]},children:[{type:b,tag:c,props:{className:[d,"language-css"]},children:[{type:a,value:P},{type:b,tag:c,props:{className:[d,aV]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"margin"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"padding"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,aW]},children:[{type:a,value:"vw"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,aW]},children:[{type:a,value:"vh"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"display"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" flex"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"justify-content"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"align-items"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:aX},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:"\n\n      "},{type:b,tag:c,props:{className:[d,aV]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:"position"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" absolute"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u003C!-- Adding the video frame with 560p dimension. Autoplay to start without hitting any button and muted because we don't need any sound  --\u003E"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"720"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,x]},children:[{type:b,tag:c,props:{className:[d,e,y]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"560"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"autoplay"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"muted"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:S,props:{id:aE},children:[{type:b,tag:I,props:{href:"#application---the-script",ariaHidden:T,tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:aF}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"The functions of the script are as follows:"}]},{type:a,value:j},{type:b,tag:"ol",props:{},children:[{type:a,value:j},{type:b,tag:am,props:{},children:[{type:a,value:"Load the required face-api models"}]},{type:a,value:j},{type:b,tag:am,props:{},children:[{type:a,value:"Capture the live camera recording and render it on the video frame we built earlier on the html page"}]},{type:a,value:j},{type:b,tag:am,props:{},children:[{type:a,value:"Get the video from the video frame, convert it to canvas, then draw the result of face detection, facial landmarks and facial expression on top of it every 0.1 second.\nThe snippet below demonstrates the use of this technique."}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:aK,props:{className:[aL]},children:[{type:b,tag:aM,props:{className:[aN,"language-javascript"]},children:[{type:b,tag:aO,props:{},children:[{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002Fget the video tag"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Q}]},{type:a,value:" video "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,an,ao]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"getElementById"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\"video\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002Fget all the required model and then calling start video function"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,"known-class-name",aq]},children:[{type:a,value:"Promise"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"all"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"tinyFaceDetector"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"faceLandmark68Net"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"faceExpressionNet"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"then"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002Fthis gets the camera input and renders it on our 720x560 video frame we built earlier"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,an,ao]},children:[{type:a,value:"navigator"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"getUserMedia"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,a_]},children:[{type:a,value:"stream"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aa,v]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"srcObject"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:r}]},{type:a,value:" stream"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,a_]},children:[{type:a,value:a$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aa,v]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ba,aq]},children:[{type:a,value:ba}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"error"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:a$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\u002F\u002Fonce the video starts playing, captures video frames and draws facial boxes, facial landmarks and facial expression on top of the detected faces in the frame every 0.1 second"}]},{type:a,value:"\n\nvideo"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"addEventListener"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\"play\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aa,v]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Q}]},{type:a,value:" canvas "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:r}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"createCanvasFromMedia"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,an,ao]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"append"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Q}]},{type:a,value:" displaySize "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:" width"},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:A}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:" height"},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:A}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"matchDimensions"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"setInterval"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"async"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aa,v]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Q}]},{type:a,value:" detections "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,"control-flow"]},children:[{type:a,value:"await"}]},{type:a,value:" faceapi\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"detectAllFaces"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"new"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aq]},children:[{type:a,value:"faceapi"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"TinyFaceDetectorOptions"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"withFaceLandmarks"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"withFaceExpressions"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Q}]},{type:a,value:" resizedDetections "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:r}]},{type:a,value:bb},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"resizeResults"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"detections"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:bc},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n    canvas"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"getContext"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:"\"2d\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"clearRect"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:bd},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"drawDetections"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"drawFaceLandmarks"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,p,m,i]},children:[{type:a,value:"drawFaceExpressions"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:S,props:{id:aG},children:[{type:b,tag:I,props:{href:"#live-demonstration",ariaHidden:T,tabIndex:U},children:[{type:b,tag:c,props:{className:[V,W]},children:[]}]},{type:a,value:aH}]},{type:a,value:j},{type:b,tag:B,props:{},children:[{type:a,value:"You can follow this link to get the live demonstration of the facial expression detection cam, we built here.\n"},{type:b,tag:I,props:{href:be,rel:[ac,ad,ae],target:af},children:[{type:a,value:be}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fimplementing-facial-expression-detection-cam",extension:".md"},prev:{slug:"optimizing-and-resizing-images-using-canvas-api",title:"Resizing and Optimizing Images Using Canvas API",createdAt:"2021-03-06T08:30:27.601Z"},next:{slug:"i-recently-got-to-experience-programming-in-rust-and-it-has-been-one-of-the-best-programming-experiences-of-my-life",title:"I recently got to experience programming in rust and it has been one of the best programming experiences of my life",createdAt:"2021-10-03T08:30:27.601Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation"," ","tag",".","property-access","\n","(",")","function",";","\"","method","\u003E","=","\n    ",",","attr-name","operator","\u003C","attr-value","attr-equals","\n  ",":","p","keyword","\u003C\u002F","{","\n        ","property","}","a","comment","number","script","canvas","video","string","\n      ","const",2,"h2","true",-1,"icon","icon-link","body","0","width","height","\n  faceapi","arrow","=\u003E","nofollow","noopener","noreferrer","_blank","strong","html","meta","\u002F\u003E","style","100","li","dom","variable","\n\n","class-name","nets","loadFromUri","\"\u002Fface-detection-cam\u002Fmodels\""," video","\n    faceapi","draw"," resizedDetections","How to implement live facial expression detection on a web browser.","https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1485796826113-174aa68fd81b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80","face-api","Face API","frontend-view---file-element","Frontend View - File element","application---the-script","Application - The Script","live-demonstration","Live Demonstration","https:\u002F\u002Fjustadudewhohacks.github.io\u002Fface-api.js\u002Fdocs\u002Fglobals.html","https:\u002F\u002Fwww.researchgate.net\u002Ffigure\u002F68-facial-landmarks_fig1_338048224","div","nuxt-content-highlight","pre","line-numbers","code","name","head","content","title","defer","src","selector","unit"," center","document","startVideo","parameter","err","console"," faceapi"," displaySize"," canvas","https:\u002F\u002Fchivalryytf.me\u002Fface-detection-cam")));