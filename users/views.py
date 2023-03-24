from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from django.contrib import messages
from .models import Profile

def loginUser(request):

    # if user is already logged in, redirect to profiles page
    if request.user.is_authenticated:
        return redirect('profiles')

    if (request.method == 'POST'):
        username = request.POST['username']
        password = request.POST['password']

        try:
            # checks if user exists in database
            user = User.objects.get(username=username)
        except:
            messages.error(request, "Username does not exist!")

        # does user authentication
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('profiles')
        else:
            messages.error(request, "Username or Password is incorrect!")
        
    return render(request, 'users/login_register.html')

def logoutUser(request):
    # logs out user
    logout(request)
    messages.success(request, "User has been logged out!")
    return redirect('login')

def profiles(request):
    # gets all profiles from database
    profiles = Profile.objects.all()
    context = {"profiles" : profiles}
    return render(request, 'users/profiles.html', context=context)

def userProfile(request, pk):
    # gets particular profile from database
    profile = Profile.objects.get(id=pk)

    topSkills = profile.skills.exclude(description__exact="")
    otherSkills = profile.skills.filter(description="")
    projects = profile.projects.all()

    context = {"profile" : profile, "topSkills" : topSkills, "otherSkills" : otherSkills, "projects" : projects}
    return render(request, 'users/user-profile.html', context=context)