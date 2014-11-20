var request = require("request");

var api_url = "graph.facebook.com/v2.2/me/events/attending?fields=is_date_only,name,id,description,end_time,location&limit=500";
var access_token = "CAACEdEose0cBAN7YJs7RZAwuZCCiCjqVyth8nZAb6p1TZBk9WKxzOooHp9CsUheRHve9cgQapE9XAo9EbgyuE7j3HZByvFhltZBUgbt1ZAJoGUqMZAVOhqf3ME65ZBmaU0vYElMQxFENd2ZC7xHXJtVPKSn4oO15yKxZBRdEYjGftsAUx0iATmy6DCKhEZCXIZA5nQur53r1xdhS8MocqGZAZAxSIAeT94VvtI1zMsZD";

function get ( access_token ) {
	request(construct_url(access_token), function ( error, response, body ) {
		if ( ! error && response.statusCode == 200 ) {
			
	.	}
	})
}

function construct_url ( access_token ) {
	return api_url + "?access_token=" + access_token;
}