```javascript
class Handlers
{
    static function OnBeforeRequest(oSession: Session) {
        if (oSession.uriContains("/justbuild/1v1Images/Lootbox/Shop-bundles/Champions/NewShopBoxes/")) {
            return;
        }
        
        if (oSession.uriContains("/justbuild/1v1Assets/StandaloneWindows64/Prod/4.707/")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_player/login")) {
            return;
        }
        
        if (oSession.uriContains("/messaging-nucleus/public/match")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_dailySpins/getDailySpinDat")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_lootBox/openGachaLootBox")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_friends/recentPlayers")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_lootBox/earnEndOfMatchRewards")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_rating/update")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_progressionEvents/updateProgress")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_challenges/updateChallengesProgress")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_player/updateProgressAndStats")) {
            return;
        }
        
        if (oSession.uriContains("/v4710_userSettings/time")) {
            return;
        }
        
        if (oSession.uriContains("https://us-central1-justbuild-cdb86.cloudfunctions.net")) {
            var newUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
            oSession.fullUrl = newUrl;
        }
        
        if (oSession.uriContains("https://onevone.psf.playtika.com")) {
            var newUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
            oSession.fullUrl = newUrl;
        }
        
        if (oSession.uriContains("https://justplay-cdn.playtika.com")) {
            var newUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
            oSession.fullUrl = newUrl;
        }
        
        if (oSession.uriContains("https://justbuild.nyc3.cdn.digitaloceanspaces.com")) {
            var newUrl = "http://127.0.0.1:3551" + oSession.PathAndQuery;
            oSession.fullUrl = newUrl;
        }
    }
}
```