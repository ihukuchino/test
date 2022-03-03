import React from "react"
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { withAuthenticator } from "aws-amplify-react";
import { PhotoPicker } from 'aws-amplify-react';
import { Storage, Auth } from 'aws-amplify';

export default function ThirdPage(){
    return(





      <button onClick={() => Auth.signOut()}>サインアウト</button>
      <PhotoPicker preview onPick={data =>{
        const { file } = data;
        Storage.put(file.name, file,{
          level: 'private',
          contentType: file.type
        })
        .then (result => console.log(result))
        .catch(err => console.log(err));





	<>
	    <h1 Style={"text-align:center"}>Fitting中...</h1>
	    <p className={styles.description}>
            <Link href = "/fourth-page">
	    <button>
	    <a>強制終了</a>
	    </button>
  	    </Link>
	    </p>
	</>
    )
}



export default withAuthenticator(App);
