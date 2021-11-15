const tests = [
    {
        tid:'one',
        title:'Mock-1',
        duration:60*60*3,
        totalQues:7,
        mques:3,
        pques:2,
        cques:2,
        Maths:[
            {
                id:'m01',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            },
            {
                id:'m02',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            },
            {
                id:'m03',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            }
        ],
        Physics:[
            {
                id:'p01',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            },
            {
                id:'p02',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            }
        ],
        Chemistry:[
            {
                id:'c01',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            },
            {
                id:'c02',
                q:'The ground state energy of Hydrogen atom is {-13.6} eV. if the electron jumps to the ground state from 3rd excited state , the wave of emitted photon is ?',
                choices:{
                    A:'875',
                    B:'1052',
                    C:'752',
                    D:'974',
                },
                right:'D',
                                    
            }
        ]
    }
]
export const initialState = {
    tests:tests,
    items: [
        {

            id: 'vone',
            maxQues:75,
            maxTime:3,
            maxMarks:300,
            img:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/test_exam_timer_1200x768.jpeg?1tCIQgCKb3Kn94aKNdMgRC2cGoRrU1d9&size=770:433',
            title: "JEE DEMO TEST",
            description:'Top notch JEE mocks for Phy to asses your readlines',
            tests: [
                {
                    tid: tests[0].tid,
                    title: tests[0].title,
                }
            ]

        }
    ]
}
