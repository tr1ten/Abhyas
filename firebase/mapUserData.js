export const mapUserData = (user) => {
    const { uid, email, refreshToken, displayName, photoURL } = user
    return {
        id: uid,
        email,
        token: refreshToken,
        name: displayName,
        profilePic: photoURL,
    }
}
