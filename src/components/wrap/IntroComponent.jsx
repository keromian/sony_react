import React from 'react';
import Section1Component from './intro/Section1Component';
import Section2Component from './intro/Section2Component';
import Section3Component from './intro/Section3Component';
import Section4Component from './intro/Section4Component';
import Section5Component from './intro/Section5Component';
import Section6Component from './intro/Section6Component';

export default function IntroComponent(props) {
    return (
        <main id='main'>
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>
        </main>
    );
}

