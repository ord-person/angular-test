			app.provider('service1', function(){
				//service1Provider  ==  this
				console.log(111111111);
				this.$get = function(){
					//service1
					return 'this is sercvice1';
				}
			})
			
			app.factory('service2', function(){
				console.log(2222222222)
				return 'this is service2';
			})
			
			app.service('service3', function(){
				console.log(33333333333);
				this.info = 'this is service3';
				return 'asdfasdfa'
			})