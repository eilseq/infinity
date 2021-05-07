export const vertexShader = `
	uniform float size;
    uniform float t;
    uniform float z;
    uniform float pixelRatio;
    
    varying vec3 vPosition;
    varying vec3 mPosition;//modified position
    varying float gas;
    
    float a,b=0.;
    
    void main(){
    
      vPosition=position;
      
      a=length(position);
      if(t>0.)b=max(0.,(cos(a/20.-t*.02)-.99)*3./a);
      if(z>0.)b=max(0.,cos(a/40.-z*.01+2.));
      mPosition=position*(1.+b*4.);
      vec4 mvPosition=modelViewMatrix*vec4(mPosition,1.);
      gl_Position=mvPosition*projectionMatrix;
      
      gas=max(.0,sin(-a/20.));
      gl_PointSize=pixelRatio*size*(1.+gas*2.)/length(mvPosition.xyz);
    
    }
`;

export const fragmentShader = `
    uniform float z;
        
    varying vec3 vPosition;
    varying vec3 mPosition;
    varying float gas;
        
    void main(){
      
      float a=distance(mPosition,vPosition);
      if(a>0.)a=1.;
      
      float b=max(.32,.0065*length(vPosition));
        
      float c=distance(gl_PointCoord,vec2(.5));
      float starlook=-(c-.5)*1.2*gas; 
      float gaslook=(1.-gas)/(c*10.);
      float texture=starlook+gaslook;
                 
      gl_FragColor=vec4(.32,.28,b,1.)*texture*(1.-a*.35);
      if(z>0.)gl_FragColor*=cos(1.57*z/322.)*(1.-.001*length(mPosition));
        
    }
`;
