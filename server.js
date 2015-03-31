Meteor.publish(null,function(){
	return Vote.find({});
});