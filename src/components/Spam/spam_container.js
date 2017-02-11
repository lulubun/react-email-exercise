import React from 'react';
import Spam from './spam';
import Emails from '../../DummyEmails'

export default function SpamContainer(props) {
    return (
		<Spam emails={Emails} />
	)
};
