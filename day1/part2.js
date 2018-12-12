// 176 bytes
a=0;f=[];i=0;r=null;s=require('fs').readFileSync('./input.txt').toString().split('\n');while(r==null){a+=Number(s[i%s.length]);f.includes(a)?r=a:(f.push(a)&&i++)}console.log(r)
