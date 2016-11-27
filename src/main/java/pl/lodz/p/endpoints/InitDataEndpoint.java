package pl.lodz.p.endpoints;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pl.lodz.p.endpoints.dto.InitDataDto;
import pl.lodz.p.services.api.InitDataServiceApi;

@RestController
@RequestMapping("/api/initData")
public class InitDataEndpoint {

    @Autowired
    private InitDataServiceApi initDataService;

    @RequestMapping(method = RequestMethod.GET)
    public
    @ResponseBody
    InitDataDto getInitData() {
        return initDataService.getInitDataDto();
    }
}
