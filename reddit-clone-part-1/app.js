(function () {
  angular.module('app', ["angularMoment"])
    .component('reddit', {
      controller: function(moment) {
        const vm = this
        vm.tab = 1
        vm.setTab = function(selected) {
          vm.tab = selected
          }

          vm.isSet = function(tab) {
            return vm.tab === tab
          }

          posts = [{
            title: 'Baby Bitch',
            body: 'Yup',
            author: 'Me',
            image: 'http://cdn.acidcow.com/pics/20100412/funny_babies_faces_49.jpg',
            createdOn: 1495072634391,
            votes: 10,
            comments: [{
              text: 'meep',
              author: 'Me',
              createdOn :1495072634598
            },
            {
              text: 'seep',
              author: 'Me',
              createdOn :1495072634598
            }]
          },
          {
            title: 'Baby Bitches',
            body: 'Yuppers',
            author: 'Meep',
            image: 'http://cdn.acidcow.com/pics/20100412/funny_babies_faces_49.jpg',
            createdOn: 1495072634391,
            votes: 12,
            comments: [{
              text: 'yikes',
              author: 'Me',
              createdOn :1495072634598
            }]
          }
          ]
          vm.posts = posts
          vm.addPost = function() {
            console.log(posts);
            vm.post.createdOn = Date.now()
            vm.post.votes = 0
            vm.post.comments = []
            posts.push(vm.post)
            console.log(posts);
            delete vm.post
          }

          vm.upVote = function(post) {
            post.votes++
          }

          vm.downVote = function(post) {
            if (post.votes >= 1) {
              post.votes--
            }
          }

          vm.setShowComments = function(selected) {
            vm.commentCheck = selected
          }

          vm.commentsOn = function(on) {
            return vm.commentCheck === on
          }

          vm.addComment = function(post) {
            var commentSection = post.comments
            vm.newComment.createdOn = Date.now()
            commentSection.push(vm.newComment)
            delete vm.newComment
          }
        },
       templateUrl: "reddit.html"
    })
})()
