const tableSetup = {

	// JavaScript source code

	CME:{
		nonPro:{
		    title: 'For non-Professional User (CME)',
		    cols: ['Market', 'Delay', 'Top of Book', 'Market Depth'], //column header
		    rows: [
		        //row
		        {
		            id: 'CME_NPRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'CME', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 1', //literal 
		                    value: '2', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                }, {
		                    title: 'USD 5', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'CBOT_NPRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'CBOT', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 1', //literal 
		                    value: '2', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                }, {
		                    title: 'USD 5', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'NYMEX_NPRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'NYMEX', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 1', //literal 
		                    value: '2', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                }, {
		                    title: 'USD 5', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'COMEX_NPRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'COMEX', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 1', //literal 
		                    value: '2', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                }, {
		                    title: 'USD 5', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'CME_BUNDLE',
		            fields: [
		                {
		                    title: 'CME_BUNDLE', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: '', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 	                },
		                {
		                    title: 'USD 3', //literal 
		                    value: '2', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                }, {
		                    title: 'USD 15', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		    ], //row
	        footerType: 'CME_NONPRO',
		    requireAttachment: false, // show fileUpload
		    selectionOption: {
		        singleChoice: false, //allow single choice only
		        bundleRow: 'CME_BUNDLE', //only one row can be bundle. Select option in bundle will unselect all other options. Match row ide
		    }
		},
		pro:{
			title: 'For Professional User (CME)',
		    cols: ['Market', 'Delay', 'Market Depth'], //column header
		    rows: [
		        //row
		        {
		            id: 'CME_PRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'CME', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 85', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'CBOT_PRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'CBOT', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 85', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'NYMEX_PRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'NYMEX', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 	                },
		                {
		                    title: 'USD 5', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        },
		        {
		            id: 'COMEX_PRO',
		            defaultValue:'1',
		            fields: [
		                {
		                    title: 'COMEX', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                 
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		                {
		                    title: 'USD 5', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                 
		                },
		            ]
		        }
		    ], //row
        	footerType: 'CME_PRO',
		    requireAttachment: false, // show fileUpload
		    selectionOption: {
		        singleChoice: false, //allow single choice only
		        bundleRow: '', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
		    }
		}
	    
	},
	ICE:{

		nonPro:{

		    
		    title: 'ICE',
		    cols: ['Market', 'Delay', 'Market Depth'], //column header
		    rows: [
		        //row
		        {
		            id: 'ICE_M1',
		            fields: [
		                {
		                    title: 'IPE', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                    
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                },
		                {
		                    title: 'USD 110', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                    
		                },
		            ]
		        },
		        {
		            id: 'ICE_M2',
		            fields: [
		                {
		                    title: 'LIFFE', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                    
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                    		                },
		                {
		                    title: 'USD 110', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                    
		                },
		            ]
		        },
		        {
		            id: 'ICE_M3',
		            fields: [
		                {
		                    title: 'NYBOT', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                    
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                    		                },
		                {
		                    title: 'USD 110', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                    
		                },
		            ]
		        }
		    ], //row
	        footerType: 'ICE_NONPRO',
		    requireAttachment: true, // show fileUpload
		    selectionOption: {
		        singleChoice: false, //allow single choice only
		        bundleRow: '', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
		    }
		}

	},

	EUREX:{

		nonPro:{
		   
		    title: 'EUREX',
		    cols: ['Market', 'Delay', 'Market Depth'], //column header
		    rows: [
		        //row
		        {
		            id: 'EUREX_Asia',
		            fields: [
		                {
		                    title: 'EUX_ASIA', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                   
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                   
		                },
		                {
		                    title: 'EUR 1', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                   
		                },
		            ]
		        },
		        {
		            id: 'EUREX_NASIA',
		            fields: [
		                {
		                    title: 'EUX_Non-Asia', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                   
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                   		                },
		                {
		                    title: 'EUR 12', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                   
		                },
		            ]
		        },
		        {
		            id: 'EUX_PRO',
		            fields: [
		                {
		                    title: 'NYBOT', //literal 
		                    value: '', //must have uniqure value if isRadio = true
		                    isRadio: false,
		                   
		                },
		                {
		                    title: 'Free', //literal 
		                    value: '1', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                   		                },
		                {
		                    title: 'EUR 52', //literal 
		                    value: '3', //must have uniqure value if isRadio = true
		                    isRadio: true,
		                   
		                },
		            ]
		        }
		    ], //row
	        footerType: 'EUREX_NONPRO',
		    requireAttachment: true, // show fileUpload
		    selectionOption: {
		        singleChoice: true, //allow single choice only
		        bundleRow: '', //only one row can be bundle. Select option in bundle will unselect all other options. Match row id
		    }
		}
	}
}
