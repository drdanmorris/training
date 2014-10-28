mongo ds047020.mongolab.com:47020/airnz -u drdanmorris -p guest



db.fleet.insert([
	{reg: 'ZK-NCI', type: 'Boeing', model: '767', variant: '319', year: 1994},	
	{reg: 'ZK-NCJ', type: 'Boeing', model: '767', variant: '319', year: 1995},
	{reg: 'ZK-NCK', type: 'Boeing', model: '767', variant: '319', year: 1997},
	{reg: 'ZK-NCL', type: 'Boeing', model: '767', variant: '319', year: 1997},
	{reg: 'ZK-NGG', type: 'Boeing', model: '737', variant: '319', year: 1999},
	{reg: 'ZK-NGH', type: 'Boeing', model: '737', variant: '319', year: 1999},
	{reg: 'ZK-NGI', type: 'Boeing', model: '737', variant: '319', year: 1999},
	{reg: 'ZK-NGJ', type: 'Boeing', model: '737', variant: '319', year: 1999},
	{reg: 'ZK-NGP', type: 'Boeing', model: '737', variant: '319', year: 2008},
	{reg: 'ZK-NGR', type: 'Boeing', model: '737', variant: '319', year: 2008},
	{reg: 'ZK-NZC', type: 'Boeing', model: '787', variant: '900', year: 2014},	
	{reg: 'ZK-NZD', type: 'Boeing', model: '787', variant: '900', year: 2014},	
	{reg: 'ZK-OAB', type: 'Airbus', model: 'A320', variant: '232', year: 2011},
	{reg: 'ZK-OJA', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJB', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJC', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJD', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJE', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJF', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJG', type: 'Airbus', model: 'A320', variant: '232', year: 2004},
	{reg: 'ZK-OJH', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJI', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJK', type: 'Airbus', model: 'A320', variant: '232', year: 2012},
	{reg: 'ZK-OJM', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJN', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJO', type: 'Airbus', model: 'A320', variant: '232', year: 2008},
	{reg: 'ZK-OJQ', type: 'Airbus', model: 'A320', variant: '232', year: 2011},
	{reg: 'ZK-OJR', type: 'Airbus', model: 'A320', variant: '232', year: 2011},
	{reg: 'ZK-OJS', type: 'Airbus', model: 'A320', variant: '232', year: 2011},
	{reg: 'ZK-OKA', type: 'Boeing', model: '777', variant: '219', year: 2005},
	{reg: 'ZK-OKB', type: 'Boeing', model: '777', variant: '219', year: 2005},
	{reg: 'ZK-OKC', type: 'Boeing', model: '777', variant: '219', year: 2006},
	{reg: 'ZK-OKD', type: 'Boeing', model: '777', variant: '219', year: 2006},
	{reg: 'ZK-OKE', type: 'Boeing', model: '777', variant: '219', year: 2006},
	{reg: 'ZK-OKF', type: 'Boeing', model: '777', variant: '219', year: 2006},
	{reg: 'ZK-OKG', type: 'Boeing', model: '777', variant: '219', year: 2006},
	{reg: 'ZK-OKH', type: 'Boeing', model: '777', variant: '219', year: 2007},
	{reg: 'ZK-OKM', type: 'Boeing', model: '777', variant: '319', year: 2010},
	{reg: 'ZK-OKN', type: 'Boeing', model: '777', variant: '319', year: 2011},
	{reg: 'ZK-OKO', type: 'Boeing', model: '777', variant: '319', year: 2011},
	{reg: 'ZK-OKP', type: 'Boeing', model: '777', variant: '319', year: 2011},
	{reg: 'ZK-OKQ', type: 'Boeing', model: '777', variant: '319', year: 2012},
	{reg: 'ZK-OKR', type: 'Boeing', model: '777', variant: '319', year: 2014},
	{reg: 'ZK-OKS', type: 'Boeing', model: '777', variant: '319', year: 2014},
	{reg: 'ZK-OXA', type: 'Airbus', model: 'A320', variant: '232', year: 2013},
	{reg: 'ZK-OXB', type: 'Airbus', model: 'A320', variant: '232', year: 2013},
	{reg: 'ZK-OXC', type: 'Airbus', model: 'A320', variant: '232', year: 2013},
	{reg: 'ZK-OXD', type: 'Airbus', model: 'A320', variant: '232', year: 2014},
	{reg: 'ZK-OXE', type: 'Airbus', model: 'A320', variant: '232', year: 2014},
	{reg: 'ZK-OXF', type: 'Airbus', model: 'A320', variant: '232', year: 2014}
])