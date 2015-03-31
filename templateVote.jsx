/*** @jsx React.DOM */
userId = "nicolsondsouza";
var voteListReact = new React.createClass({
	getInitialState: function(){
		var vote = [];

		// var user = Meteor.users.findOne({
		// 	"_id": userId,
		// });
		// var imageId = Session.get("imageId");
		// if(user && user.vote){
		// 	vote = user.vote;
		// }
		return {
			vote: vote
		}
	},
	componentDidMount: function(){
		var self = this;
		Tracker.autorun(function(){
			var big = Session.get("big");
			if(big && big[0]){
				vote = Vote.find({"imageId": big[0]._id}).fetch();
				self.setState({vote: vote})
			}
			// var user = Meteor.users.findOne({
			// 	"_id": userId,
			// });
			// var imageId = Session.get("imageId");
			// if(user && user.vote){
			// 	self.setState({vote: user.vote})
			// }
		});
	},
	"onClickvote": function(currentvote){
		var vote = this.state.vote;
		// console.log(currentvote)
		// for(var i=0,il=vote.length;i<il;i++){
		// 	if(vote[i]._id == currentvote._id){
		// 		vote[i].active = "active";
		// 	}
		// 	else{
		// 		vote[i].active = "";	
		// 	}
		// }
		this.setState({vote: vote});
		// console.log(this);
		// this.setState({})
	},
	"render": function(){
		var self = this;
		// console.log(this.state.vote)
		votelist = this.state.vote.map(function(vote){
			return <voteReact vote={vote} onClickvote={self.onClickvote}/>
		})
		// if(this.state.vote.length != 0)
		// 	return votelist;
		// else
		// 	return <div className="ui tiny images"> </div>
		// console.log(votelist)
		// return (votelist)
		// if(votelist.length == 0){
		// 	return(
		// 		<div> </div>
		// 	)
		// }
		// else{
			return ( 
				<div>
					{votelist}
				</div>
			)
		// }
		
		
	}
});
Vote.voteListReact = voteListReact;

var voteReact = new React.createClass({
	"onClickvote": function(){
		this.props.onClickvote(this.props.vote);
		Session.set("voteId",this.props.vote._id);
		// console.log(this.props.onClickvote)
	},
	"render": function(){
			// console.log(this.props)
			// var className = "ui small images "+(this.props.vote.active||"");
			var vote = this.props.vote;
			var style = {
				left: vote.XP +"%", 
				top: vote.YP +"%"
			}
			return( 
				<img className="ui small images vote" style={style} src={this.props.vote.profile_picture} onClick={this.onClickvote}/>
			)
	}
});
Vote.voteReact = voteReact;

Template.votePackage.rendered = function(){
	// React.renderComponent(<voteListReact />, document.getElementById('votePackage'));
	React.renderComponent(<bigReact />, document.getElementById('bigPackage'));
}