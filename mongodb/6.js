db.items.aggregate({$group:{_id:null,Avg_First_Bid:{$avg:"$First_Bid"}}});