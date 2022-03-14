# Developer Guide   

Developer guide contains a short overview of the smart contracts of Supaheroes platform. All smart contracts are open source and can be found on github.

The CampaigFactory contract is the main contract where all projects are started and where the projectstarter can choose two different options: start a project with vesting or start a project without vesting. Details are found at the vesting contract explanation. CampaignFactory contract consists of functions to start projects with both options and will make a StandardCampaignStrategy contract, a RewardManager contract and depending on your choice a VestingManager contract. 
This contract can also be used to change the master address of the contracts. Master addresses are logged as well as new campaigns that are called from this contract.

StandardCampaignStrategy contract is created for eacht project and consists of information about the project, addresses that support the project with amount, votes on the project to continue funding, vote weights and when the campaign stopped. By calling the payout function projectstarters can withdraw the fundings when fundingperiod has ended.

Rewardmanager contract is important because it gives voting power in the form of a Supahero Contributor Certificate (SCC) when supporting a project through this contract. When projects are doomed to fail or if it is false people can get a vote up and vote to stop the project and get funds back. 

Vestingmanager contract is optional but recommended because it creates less risk for supporters. Vesting means the projectstarter will get the funding in tranches so him/her has to come up with proof that the project is making progress. If not, supporters can put up a vote and vote with their SCCs (hence the Rewardmanager contract) to stop the project.
