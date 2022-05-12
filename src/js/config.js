import contactForm from './contact-form';

export default {
  items: [
    {
      name: 'Landing',
      component: 'Landing',
      sections: [
        {
          type: 'InfoSection',
          props: {
            header: 'Problem solvers first.',
            content: [
              'Web & Software Development | Mobile Application Development | Content Management Systems | DevOps | Analytics',
              'The Devlight team builds tailored solutions to business problems using the latest and most efficient technology.'
            ],
            decal: {
              src: 'dive.svg',
              alt: 'Decal'
            },
            orientation: 'right'
          }
        },
        {
          type: 'ImageSection',
          props: {
            content: 'We know just what you need...',
            image: {
              src: 'mockup.png',
              alt: 'Tech Head'
            }
          }
        },
        {
          type: 'ContactTable',
          props: {
            content: [
              [
                'Web & Software',
                'From static sites to complex multi-page applications.'
              ],
              [
                'Mobile Applications',
                `Native Applications to expand your company's reach.`
              ],
              [
                'Content Management',
                `Manage your own content or allow us to copywrite for you.`
              ],
              [
                'Analytics',
                `Subscribe to reporting so you can observe and manage customer engagement in real time.`
              ]
            ]
          }
        },
      ],
    },
    {
      name: 'About',
      component: 'About',
      sections: [
        {
          type: 'ImageSection',
          props: {
            content: 'Software created from conception to deployment with your vision in mind.',
            image: {
              src: 'dice-large.png',
              alt: 'Tech Head'
            }
          }
        },
        {
          type: 'InfoSection',
          props: {
            content: ['Sed tempor justo in felis tristique, vel vehicula libero faucibus. Aenean ac viverra risus, vel ornare risus. Praesent ac lacinia massa. Cras ac tincidunt lacus. In non tortor lorem. In in tristique massa, convallis finibus enim. Donec ac tellus scelerisque, facilisis ante id, aliquet sapien.'],
            orientation: 'right'
          }
        },
      ]
    },
    {
      name: 'Contact',
      component: 'Contact',
      sections: [
        {
          type: 'ContactTable',
          props: {
            content: [
              [
                'General Enquiries',
                'general@testemail.com'
              ],
              [
                'Opportunities',
                `Contact Faye at faye@testemail.com`
              ],
              [
                'Location',
                `Spring Hill, Brisbane`
              ],
              [
                'Follow us',
                `Instagram | Linkedin`
              ]
            ]
          }
        },
        {
          type: 'FormSection',
          props: {
            content: `Get in touch... let's talk details`,
            schema: contactForm.fields,
            options: contactForm.options,
            model: contactForm.model,
          }
        },
        {
          type: 'InfoSection',
          props: {
            content: ['Sed tempor justo in felis tristique, vel vehicula libero faucibus. Aenean ac viverra risus, vel ornare risus. Praesent ac lacinia massa. Cras ac tincidunt lacus. In non tortor lorem. In in tristique massa, convallis finibus enim. Donec ac tellus scelerisque, facilisis ante id, aliquet sapien.'],
            orientation: 'left'
          }
        },
      ]
    },
  ]
}