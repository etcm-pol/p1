<?php
/**
 * Created by PhpStorm.
 * User: Dawid
 * Date: 01.01.2017
 * Time: 19:28
 */

namespace AppBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PatientController extends Controller
{
    /**
     * @Route("/patient/new", name="patient_new_form")
     */
    public function getFormAction(Request $request)
    {
        $route = $request->attributes->get("_route");
        return $this->render("patient/new-patient.html.twig", [
            "route" => $route
        ]);
    }
    /**
     * @Route("/patient/list", name="patient_list")
     */
    public function getListAction(Request $request)
    {
        $route = $request->attributes->get("_route");
        return $this->render("patient/list-patient.html.twig", [
            "route" => $route
        ]);
    }
}