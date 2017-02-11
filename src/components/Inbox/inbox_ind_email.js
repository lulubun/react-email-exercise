import React from 'react';
import Emails from '../../DummyEmails'

export default function InboxIndEmail() {
  const emails = {Emails};
  const email = emails.inbox[index];
  return (
    <div className="OneEmail">
        To: {email.to} <br/>
        From: {email.from} <br/>
        Title: {email.title} <br/>
        {email.content}
    </div>
    )
  }
