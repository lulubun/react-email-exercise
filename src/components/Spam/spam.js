import React from 'react';
import SpamEmail from './spam_email'

export default function SpamEmails(props) {
	const spam = Object.keys(props.emails.spam).map((emailID, index) => {
        const email = props.emails.spam[emailID];
         return (
             <li key={index}>
                <SpamEmail id={email.id}
                from={email.from}
                 to={email.to}
                 title={email.title}
								 content={email.content}/>
             </li>
         );
     });

    return (
        <ul>
        	{spam}
        </ul>
    );
};
