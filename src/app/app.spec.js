describe('sorting the list of users', function() {
  
  it('should sort in descending order by default', function() {
    var users = ['russ', 'kev', 'bryan'];
    expect(users).toEqual(['russ', 'kev', 'bryan']);
  });

});