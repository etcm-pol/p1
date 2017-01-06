<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Created by PhpStorm.
 * User: Dawid
 * Date: 01.01.2017
 * Time: 16:10
 */
class DefaultController extends Controller
{
    /**
     * @Route("/", name="app_index")
     */
    public function indexAction(Request $request)
    {
        $route = $request->attributes->get("_route");
        return $this->render("default/index.html.twig", [
            "route" => $route
        ]);
    }
}